import type { LucideIcon, LucideProps } from "lucide-react"
import {
	AlertCircle,
	AlertTriangle,
	ArrowRight,
	BadgeCheck,
	Calendar,
	CalendarCheck,
	CameraOff,
	Check,
	CheckCircle,
	ChevronDown,
	ChevronRight,
	Clock,
	Dumbbell,
	FileText,
	Heart,
	Image,
	Info,
	MapPin,
	Minus,
	Plus,
	PoundSterling,
	Search,
	Settings,
	Share2,
	Star,
	TrendingDown,
	TrendingUp,
	User,
	UserPlus,
	X,
} from "lucide-react"
import { cn } from "@hauscore/utils"

const iconMap = {
	"alert-circle": AlertCircle,
	"alert-triangle": AlertTriangle,
	"arrow-right": ArrowRight,
	"badge-check": BadgeCheck,
	calendar: Calendar,
	"calendar-check": CalendarCheck,
	"camera-off": CameraOff,
	check: Check,
	"check-circle": CheckCircle,
	"chevron-down": ChevronDown,
	"chevron-right": ChevronRight,
	clock: Clock,
	dumbbell: Dumbbell,
	"file-text": FileText,
	heart: Heart,
	image: Image,
	info: Info,
	"map-pin": MapPin,
	minus: Minus,
	plus: Plus,
	"pound-sterling": PoundSterling,
	search: Search,
	settings: Settings,
	"share-2": Share2,
	star: Star,
	"trending-down": TrendingDown,
	"trending-up": TrendingUp,
	user: User,
	"user-plus": UserPlus,
	x: X,
} satisfies Record<string, LucideIcon>

export type IconName = keyof typeof iconMap

const sizeMap = {
	sm: "size-4",
	md: "size-5",
	lg: "size-6",
} as const

export type IconSize = keyof typeof sizeMap | number

export interface IconProps extends Omit<LucideProps, "ref"> {
	name: IconName
	size?: IconSize
}

/** Lucide outline icon wrapper — inherits `currentColor`. */
export function Icon({ name, size = "md", className, strokeWidth = 1.9, ...props }: IconProps) {
	const LucideIcon = iconMap[name]
	const sizeClass = typeof size === "number" ? undefined : sizeMap[size]

	return (
		<LucideIcon
			aria-hidden="true"
			strokeWidth={strokeWidth}
			className={cn("shrink-0", sizeClass, className)}
			style={typeof size === "number" ? { width: size, height: size } : undefined}
			{...props}
		/>
	)
}
