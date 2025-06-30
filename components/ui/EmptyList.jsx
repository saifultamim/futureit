

export const EmptyList = ({
  // icon: Icon = Inbox,
  title = "No Data Found",
  description = "Get started by adding your first item",
  className='',
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 rounded-lg border-muted-foreground p-8 ${className}`}
    >
      {/* {Icon && <Icon className="h-12 w-12 text-muted-foreground" />} */}
      <div className="text-center">
        <p className="text-lg font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

EmptyList.displayName = "EmptyList";
