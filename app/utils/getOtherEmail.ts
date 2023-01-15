export default function getOtherEmail(users: any, currentUser: any) {
    return users?.filter((user: any) => user !== currentUser.email)[0] || "Cannot find user name..."
}

