const petOwner = {
    name:"Hero Alam",
    contact: {
        phone: "05543",
        email: "xy@gmail.com",
    },
    pet: {
        name: "lofie",
        info: {
            color: "balck",
            weight: "1.2 kg",
            food:{
                price:10
            }
        },
    },
};

// console.log(petOwner.pet.info.food.pricee);
console.log(petOwner.pet.info?.food?.pricee);