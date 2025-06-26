import { cn } from "@/utils/tailwind-utils";


export const ErrorAlert = ({
  icon: Icon = AlertCircle,
  title = "Error Occurred",
  description = "Something went wrong, please try again.",
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-lg border border-red-500 p-6 shadow-md max-w-xl mx-auto",
        className
      )}
    >
      {Icon && <Icon className={cn("h-12 w-12 text-red-600", className)} />}
      <div className="text-center">
        <p className={cn("text-lg font-semibold text-red-700", className)}>
          {title}
        </p>
        <p className={cn("text-sm text-red-500", className)}>{description}</p>
      </div>
    </div>
  );
};

ErrorAlert.displayName = "ErrorAlert";
