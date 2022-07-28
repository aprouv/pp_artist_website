require 'csv'

Painting.destroy_all

puts "All previous paintings deleted"


CSV.foreach(Rails.root.join('lib/seeds/paintings.csv'), headers: true, col_sep: ';') do |row|

  Painting.find_or_create_by(
    {
      name: row[0],
      description: row[1],
      format: row[2],
      price: row[3],
      year: row[4]
    }
  )

end

puts "All paintings saved"

Review.create(name: 'Camille', content: 'Très belles toiles')
Review.create(name: 'Jean-Paul', content: "J'adore votre travail, continuez ainsi")
Review.create(name: 'Anne-Sophie', content: "Bonjour Patricia, je souhaitais vous féliciter pour ces nombreuses toiles peintes complètement en autodidacte. Je me retrouve complètement dans votre art et votre façon de voir la peinture et j'espère que vous allez continuer à nous faire voyager.")
