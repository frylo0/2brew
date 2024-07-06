import cn from 'clsx';
import { parsePhoneNumber } from 'libphonenumber-js';
import { InputHTMLAttributes, KeyboardEventHandler, useCallback, useRef, useState } from 'react';

import SVG_InvalidInput from '@/assets/vector/invalid-input.svg';
import { countryFlags } from './countryFlags';
import { sFlag, sInput, sInputError, sInvalidInputSign, sTextField, svType } from './Input.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	type?: keyof typeof svType;
}

export const Input: React.FC<InputProps> = ({ className = '', disabled, type = 'text', onKeyUp, style, ...props }) => {
	const [countryEmoji, setCountryEmoji] = useState('');
	const [isValid, setIsValid] = useState(true);

	const isPhone = type === 'phone';
	const isFlagVisible = isPhone && countryEmoji !== '' && isValid;
	const hasValidation = !!props.pattern || isPhone;

	if (isPhone) {
		if (props.pattern) {
			console.warn(
				'Unexpected usage of phone input with pattern attribute. Expecting not to use pattern, because it will be rewritten underhood.'
			);
		}

		props.pattern = String.raw`^(|\+|\+\d*)$`;
	}

	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleWrapperClick = useCallback(() => {
		inputRef.current?.focus();
	}, []);

	const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = useCallback(
		(e) => {
			if (isPhone) {
				try {
					const phone = parsePhoneNumber(e.currentTarget.value);
					const country = phone && phone.country ? phone.country.toLowerCase() : '';

					setCountryEmoji(countryFlags[country as keyof typeof countryFlags] || '');
				} catch (error) {
					console.error('Cannot parse phone number to detect country code');
				}
			}

			if (hasValidation) {
				const isValid = new RegExp(props.pattern!).test(e.currentTarget.value);
				setIsValid(isValid);
			}

			onKeyUp?.(e);
		},
		[hasValidation, isPhone, onKeyUp, props.pattern]
	);

	return (
		<div
			className={cn(sInput, !isValid && sInputError, className)}
			ref={wrapperRef}
			aria-disabled={disabled}
			style={style}
			onClick={handleWrapperClick}
		>
			{isFlagVisible && <div className={cn(sFlag)}>{countryEmoji}</div>}
			<input className={cn(sTextField)} ref={inputRef} disabled={disabled} onKeyUp={handleKeyUp} {...props} />
			{!isValid && <SVG_InvalidInput className={cn(sInvalidInputSign)} />}
		</div>
	);
};
