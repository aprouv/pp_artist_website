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

Review.create(name: 'Andréa', content: 'Très belles toiles')
Review.create(name: 'Jean-Paul', content: "j'adore votre travail, continuez ainsi")
