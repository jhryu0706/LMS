const DashboardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="h-full">
            <div className="hidden md:flex">

            </div>
            {children}
        </div>
     );
}
 
export default DashboardLayout;