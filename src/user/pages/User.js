import UsersList from "../components/UsersList";

const User = () => {
  const USERS = [
    {
      id: "u1",
      name: "Han",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Nokota_Horses_cropped.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default User;
