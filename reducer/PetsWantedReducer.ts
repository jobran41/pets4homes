import { v4 as uuidv4 } from 'uuid'
let initState = {
    articles: [
        {
            id: uuidv4(),
            adTitle: "Akita Américain",
            petImg: '/assets/Akita Américain.png',
            type:'dogs',
            breed: "German",
            imgs: ['/assets/Akita Américain.png', "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12213218/German-Shepherd-on-White-00.jpg", "https://www.insidedogsworld.com/wp-content/uploads/2017/07/GermanShepherd.jpg"],
            description: "A sweet friendly dog, available now!",
            popularity: 150,
            size: "Large",
            advertType: "Wanted",
            boostedAd: false,
            age: "2 months, 4 days old",
            microchipped: true,
            neutred: false,
            vaccinations: true,
            kcRegistered: true,
            price: 90,
            seller: {
                sellerName: "John Doe",
                sellerType: "Individual",
                location: "Sousse",
                member_since: "Aug 2019",
                phone: 9953215
            },
            added_at: "2017-01-25"
        },
        {
            id: uuidv4(),
            adTitle: "Berger Allemand",
            petImg: '/assets/Berger Allemand.png',
            type:'dogs',
            breed: "German",
            imgs: ['/assets/Berger Allemand.png', "https://www.dogtime.com/assets/uploads/2020/03/shiloh-shepherd-dog-breed-pictures-cover.jpg", "https://www.perfectdogbreeds.com/wp-content/uploads/2020/04/Complete-English-Shepherd-Guide-6-Must-Read-Facts-Cover.jpg"],
            description: "A sweet friendly dog, available now!",
            popularity: 210,
            size: "Medium",
            advertType: "For Stud",
            boostedAd: true,
            age: "1 year, 3 months old",
            microchipped: true,
            neutred: false,
            vaccinations: true,
            kcRegistered: false,
            price: 120,
            seller: {
                sellerName: "Nice Pets",
                sellerType: "Company",
                location: "Tunis",
                member_since: "July 2018",
                phone: 25489851
            },
            added_at: "2017-01-26"
        },
        {
            id: uuidv4(),
            adTitle: "Bichon",
            petImg: '/assets/Bichon.png',
            type:'dogs',
            breed: "Shih Tzus",
            imgs: ['/assets//Bichon.png', "https://cdn.orvis.com/images/DBS_ShihTzu_1280.jpg", "https://dogtime.com/assets/uploads/2017/12/shih-tzu-dog-names-1.jpg", "https://k9deb.com/wp-content/uploads/2019/07/Shih-Tzu-1000x550.png"],
            description: "A sweet friendly dog, available now!",
            popularity: 80,
            size: "Large",
            advertType: "For Adoption",
            boostedAd: false,
            age: "1 months, 15 days old",
            microchipped: false,
            neutred: true,
            vaccinations: true,
            kcRegistered: true,
            price: 250,
            seller: {
                sellerName: "Ed Sherean",
                sellerType: "Individual",
                location: "Ariana",
                member_since: "Jan 2020",
                phone: 4489533
            },
            added_at: "2017-01-10"
        },
        {
            id: uuidv4(),
            adTitle: "Boxer",
            petImg: '/assets/Boxer.png',
            type:'dogs',
            breed: "Pugs",
            imgs: ['/assets/Boxer.png', "https://nypost.com/wp-content/uploads/sites/2/2020/04/pugs-coronavirus.jpg", "https://petsymptoms.com/wp-content/uploads/2017/08/pug-dogs-feature-pug-pugs-dog-cute-portrait-laying-pb.jpg"],
            description: "Hi we are so proud of our lovely girl Treacle she has just given birth to Her first litter of 6 adorable cockapoo puppies,Treacle is our adorable loving family pet.",
            popularity: 52,
            size: "Small",
            advertType: "For Sale",
            boostedAd: true,
            age: "5 months, 24 days old",
            microchipped: true,
            neutred: false,
            vaccinations: true,
            kcRegistered: true,
            price: 100,
            seller: {
                sellerName: "Bruno Mars",
                sellerType: "Individual",
                location: "Ben Arous",
                member_since: "Mai 2020",
                phone: 6578546
            },
            added_at: "2017-01-30"
        }
    ]
}

const PetsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    default:
      return state
  }
}

export default PetsReducer