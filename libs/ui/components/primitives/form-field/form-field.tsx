import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@hauscore/utils"

export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
	label?: string
	htmlFor?: string
	required?: boolean
	helper?: string
	error?: string
	children?: ReactNode
}

/** Field wrapper — label, optional required mark, helper or error text. */
export function FormField({
	label,
	htmlFor,
	required = false,
	helper,
	error,
	children,
	className,
	...rest
}: FormFieldProps) {
	return (
		<div className={cn("flex flex-col gap-1.5", className)} {...rest}>
			{label ? (
				<label htmlFor={htmlFor} className="font-sans text-sm font-semibold text-foreground">
					{label}
					{required ? <span className="ml-0.5 text-danger">*</span> : null}
				</label>
			) : null}
			{children}
			{error || helper ? (
				<span className={cn("font-sans text-[13px]", error ? "text-danger" : "text-foreground-muted")}>
					{error ?? helper}
				</span>
			) : null}
		</div>
	)
}
