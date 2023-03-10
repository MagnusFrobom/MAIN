const UserComponent = () => {
    return <div>User</div>;
};


const useUserData = (userId: string) => {
    return useQuery(["user-query"], async () => {
        return await (await fetch("/api/user/")).json();
    });
}

export const UseComponent: React.FC<{ userId }> = ({userId}) => {
    const {data} = useUserData(userId);
    return <div>User</div>
}