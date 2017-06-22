const displayPets = (cats, dogs) => {
    if (cats && dogs) {
        return { petText: "Pet Friendly", petClass: "paw" };
    } else if (cats) {
        return { petText: "Cats Only", petClass: "paw" };
    } else if (dogs) {
        return { petText: "Dogs Only", petClass: "paw" };
    }

    return { petText: "No Pets Allowed", petClass: "no-pets" };
};

export default displayPets;
