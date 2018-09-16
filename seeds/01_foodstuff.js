exports.seed = function(knex, Promise) {
  return knex('foodstuff').del()
    .then(function () {
      return knex('foodstuff').insert([
        {
          category: 'dairy',
          brand: 'Egglands Best',
          name: 'Eggs',
          img: 'https://mbtskoudsalg.com/images/dozen-eggs-png-7.png',
          quantity: 5,
          location: 'refrigerator'
        },
        {
          category: 'dairy',
          brand: 'Silk',
          name: 'Cashew Milk',
          img: 'https://silk.com/sites/default/files/articles/About_Cashew_Header.png',
          quantity: .3,
          location: 'refrigerator'
        },
        {
          category: 'cereal',
          brand: 'General Mills',
          name: 'Cheerios',
          img: 'https://vignette.wikia.nocookie.net/uncyclopedia/images/a/a5/Cheeriosoriginal.png',
          quantity: .7,
          location: 'pantry'
        }
      ]);
    });
};