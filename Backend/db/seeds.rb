puts "🌱 Seeding spices..."
Houses.destroy_all

Houses.create([
    {
      
        "name": "Gray House",
        "address": "17 Cherry Tree Lane",
        "notes": "Corner lot, beautiful yard, neighbors are loud.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBrgX4UGxFduTOHCR_9WXE5pN-Iucq0yK02DfQDcRgWmsnYHEtGP2CbuMHuMy0z3nVBmU&usqp=CAU"
      },
      {
        
        "name": "Blue House",
        "address": "221 Baker St.",
        "notes": "Small yard, community pool, inside has been updated.",
        "image": "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg"
      },
      {
        
        "name": "Normal and Bland House",
        "address": "4 Privot Dr.",
        "notes": "Small backyard, not alot of storage space, no post on Sundays.",
        "image": "https://i.insider.com/57dff03aa1e3051b008b49df?width=700"
      },
      {
       
        "name": "White House",
        "address": "186 Fleet St.",
        "notes": "Newly renovated outside and inside, central heating and AC, area is on the upswing.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgrTDM2IJiGGdfkU6oyfh4OW2a4Wcw-1bK8Q&usqp=CAU"
      }
])

# manager1 = Manager.create (name: "Alexis")
# manager2 = Manager.create (name: "Erick")
# manager3 = Manager.create (name: "Emily")

# house1 = House.create(
#       name: "Gray House",
#       address: "17 Cherry Tree Lane",
#       notes: "Corner lot, beautiful yard, neighbors are loud.",
#       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBrgX4UGxFduTOHCR_9WXE5pN-Iucq0yK02DfQDcRgWmsnYHEtGP2CbuMHuMy0z3nVBmU&usqp=CAU"
#       )

# house2 = House.create (
#       name: "Blue House",
#       address: "221 Baker St.",
#       notes: "Small yard, community pool, inside has been updated.",
#       image: "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg"
#       )   

# house3 = House.create(
#       name: "Normal and Bland House",
#       address: "4 Privot Dr.",
#       notes: "Small backyard, not alot of storage space, no post on Sundays.",
#       image: "https://i.insider.com/57dff03aa1e3051b008b49df?width=700"
#       )

# house4 = House.create (
#       name: "White House",
#       address: "186 Fleet St.",
#       notes: "Newly renovated outside and inside, central heating and AC, area is on the upswing.",
#       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgrTDM2IJiGGdfkU6oyfh4OW2a4Wcw-1bK8Q&usqp=CAU"
#       )

puts "✅ Done seeding!"

