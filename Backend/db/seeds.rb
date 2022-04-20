puts "🌱 Seeding spices..."
Houses.destroy_all

# Manager data
manager1 = Manager.create(
      name: "Alexis", 
      properties_managing: "17 Cherry Tree Lane",
      bio: "I will take care of everything!",
      image: "https://ca.slack-edge.com/T02MD9XTF-U02UVKW3J10-8be8627c12e4-512"
      )

manager2 = Manager.create(
      name: "Erick", 
      properties_managing: "221 Baker St.",
      bio: "Making your rental investment easy!",
      image: "https://ca.slack-edge.com/T02MD9XTF-U02U0G0CULV-da7782e821ac-512"
      )

manager3 = Manager.create(
      name: "Emily", 
      properties_managing: "4 Privot Dr & 186 Fleet St.",
      bio: "Voted #1 Property Manager for the past 5 years in Property Manager Weekly Magazine!",
      image: "https://ca.slack-edge.com/T02MD9XTF-U02U3DJUAJE-0ae7309ad364-512"
      )




# House/property data
house1 = Houses.create(
      name: "Gray House",
      address: "17 Cherry Tree Lane",
      notes: "Corner lot, beautiful yard, neighbors are loud.",
      property_manager: "Alexis",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBrgX4UGxFduTOHCR_9WXE5pN-Iucq0yK02DfQDcRgWmsnYHEtGP2CbuMHuMy0z3nVBmU&usqp=CAU"
      )

house2 = Houses.create(
      name: "Blue House",
      address: "221 Baker St.",
      notes: "Small yard, community pool, inside has been updated.",
      property_manager: "Erick",
      image: "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg"
      )   

house3 = Houses.create(
      name: "Normal and Bland House",
      address: "4 Privot Dr.",
      notes: "Small backyard, not alot of storage space, no post on Sundays.",
      property_manager: "Emily",
      image: "https://i.insider.com/57dff03aa1e3051b008b49df?width=700"
      )

house4 = Houses.create(
      name: "White House",
      address: "186 Fleet St.",
      notes: "Newly renovated outside and inside, central heating and AC, area is on the upswing.",
      property_manager: "Emily",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgrTDM2IJiGGdfkU6oyfh4OW2a4Wcw-1bK8Q&usqp=CAU"
      )

puts "✅ Done seeding!"

