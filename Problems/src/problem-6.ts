interface Profile {
    name: string;
    age: number;
    email: string;
  }


  const updateProfile = (profile: Profile, update: Partial<Profile>): Profile => {
    return { ...profile, ...update };
  };

  const myProfile: Profile = { name: "Sakib", age: 25, email: "hossain.sakib.x@gmail.com" };
console.log(updateProfile(myProfile, { age: 26 }));
