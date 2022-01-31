import {mockGuitars} from './mock-guitars';
import {search} from './search';

describe('Business logic: check search functions', () => {
  describe('Function: search', () => {
    it('should be return GUITARS structure filtered by keywords', () => {
      const searchKey = 'чест';
      expect(search(mockGuitars, searchKey))
        .toEqual(
          [
            {
              id: 1,
              name: 'Честер Bass',
              vendorCode: 'SO757575',
              type: 'electric',
              description: 'Замечательный малобюджетный вариант, созданный для новичков, которые отдают предпочтение мелодичным стилям. Прекрасно звучат блюз и баллады, исполненные на этой гитаре. Акустические свойства весьма высоки, в отличие от ее стоимости.',
              previewImg: 'img/guitar-1.jpg',
              stringCount: 7,
              rating: 4,
              price: 17500,
              comments: [
                {
                  id: '9b126049-6392-477e-b2c2-2209bb67ef61',
                  userName: 'Паша',
                  advantage: 'Рекомендую!',
                  disadvantage: 'Быстро приходит в негодность покрытие краской.',
                  comment: 'Купила гитуру, прислали которая несоответствует описанию, струны плохого качества.',
                  rating: 2,
                  createAt: '2021-10-22T12:48:05.618Z',
                  guitarId: 1,
                },
                {
                  id: '242811cb-1f60-4ca6-a982-ea3516c6ad0d',
                  userName: 'Никита',
                  advantage: 'Рекомендую!',
                  disadvantage: 'Быстро приходит в негодность покрытие краской.',
                  comment: 'В целом для домашнего использования и дворовых песен в самый раз!',
                  rating: 2,
                  createAt: '2021-11-16T12:48:05.654Z',
                  guitarId: 1,
                },
                {
                  id: '4dd94521-4816-42d9-8ebd-13339bba6216',
                  userName: 'Никита',
                  advantage: 'Цена=качество.',
                  disadvantage: 'Плохие стоковые струны, гриф.',
                  comment: 'Гитара пришла, за такие деньги неплохо, но гриф чуть кривой, изза этого звук в 5-3 струне звенит, для новичков сойдёт.',
                  rating: 3,
                  createAt: '2022-01-21T12:48:05.654Z',
                  guitarId: 1,
                },
                {
                  id: '27df7005-9b23-4643-9fb3-eefff935d98f',
                  userName: 'Ольга',
                  advantage: 'Хорошый звук.',
                  disadvantage: 'Разбитая гитара. Плохая упаковка.',
                  comment: 'Когда в наличии будет в чёрном цвете?',
                  rating: 1,
                  createAt: '2021-10-16T12:48:05.654Z',
                  guitarId: 1,
                },
                {
                  id: '69537d9b-2c6a-4d6a-9330-5ce26a2cd2d5',
                  userName: 'Даша',
                  advantage: 'Звук, внешний вид.',
                  disadvantage: 'Нет.',
                  comment: 'В общем гитара мне понравилась, профессионально оценить не могу. Есть мелкие недочеты равномерности покрытия краской в некоторых незаметных местах, но для такой цены не существенные.',
                  rating: 2,
                  createAt: '2021-12-14T12:48:05.655Z',
                  guitarId: 1,
                },
                {
                  id: '5572f3f5-c197-4421-bb76-cc6103d457a6',
                  userName: 'Паша',
                  advantage: 'Пока нареканий нет.',
                  disadvantage: 'Плохие стоковые струны, гриф.',
                  comment: 'Это моя первая гитара. Все понравилось. Сделано качественно.',
                  rating: 3,
                  createAt: '2021-10-25T12:48:05.655Z',
                  guitarId: 1,
                },
                {
                  id: 'b4782fde-4f71-459c-a252-55426e863280',
                  userName: 'Паша',
                  advantage: 'Нет.',
                  disadvantage: 'Разбитая гитара. Плохая упаковка.',
                  comment: 'Неплохо, но дорого.',
                  rating: 2,
                  createAt: '2022-01-22T12:48:05.655Z',
                  guitarId: 1,
                },
                {
                  id: '98ada8c8-f7b2-45be-a1d9-c6ab199ad253',
                  guitarId: 1,
                  userName: 'ffddssfvnkjkjn',
                  advantage: 'hvhvhg',
                  disadvantage: 'jbj',
                  comment: 'bjb',
                  rating: 1,
                  createAt: '2022-01-25T12:54:43.837Z',
                },
                {
                  id: '8652adf1-cd0a-48e4-a975-c4a3318bcfb2',
                  guitarId: 1,
                  userName: 'T',
                  advantage: 'E',
                  disadvantage: 'S',
                  comment: 'T',
                  rating: 5,
                  createAt: '2022-01-25T13:16:25.400Z',
                },
              ],
            },
            {
              id: 6,
              name: 'Честер WX',
              vendorCode: 'SO934345',
              type: 'electric',
              description: 'Электрогитара с олд-скульным грифом и глянцевым корпусом для настоящих рок-музыкантов. Насыщенный звук идеально подойдет для исполнения рок-композиций.',
              previewImg: 'img/guitar-2.jpg',
              stringCount: 6,
              rating: 3.5,
              price: 15300,
              comments: [
                {
                  id: '622626f1-9618-4be1-9dce-ecc857906cb3',
                  userName: 'Никита',
                  advantage: 'Пока нареканий нет.',
                  disadvantage: 'Струны.',
                  comment: 'Гитара для начинающих,самое то.Но струны в комплекте-негодятся,от слова совсем.',
                  rating: 2,
                  createAt: '2021-11-16T12:48:05.655Z',
                  guitarId: 6,
                },
                {
                  id: '97dfcd47-f7bb-47cf-9be2-01efd6bb17d2',
                  userName: 'Максим',
                  advantage: 'Нет.',
                  disadvantage: 'Быстро расстраивается.',
                  comment: 'В целом для домашнего использования и дворовых песен в самый раз!',
                  rating: 1,
                  createAt: '2022-01-19T12:48:05.655Z',
                  guitarId: 6,
                },
                {
                  id: '1b8fad7b-a70b-4bfa-b314-0a9464b5ab97',
                  userName: 'Артём',
                  advantage: 'Легкая в плане веса, изготовлена на много аккуратнее чем советские гитары.',
                  disadvantage: 'Не рекомендую!',
                  comment: 'Подарила сыну на первое сентября прошлого года. Пришла целой. Для начала гитара сойдёт.',
                  rating: 5,
                  createAt: '2021-10-23T12:48:05.655Z',
                  guitarId: 6,
                },
                {
                  id: '6cf01829-e5b3-4737-9b91-f0be25aed187',
                  userName: 'Артём',
                  advantage: 'Хорошый звук.',
                  disadvantage: 'Плохо. Очень плохо.',
                  comment: 'В целом для домашнего использования и дворовых песен в самый раз!',
                  rating: 5,
                  createAt: '2021-11-17T12:48:05.655Z',
                  guitarId: 6,
                },
                {
                  id: '66f30630-610d-4294-b089-caad582864fb',
                  userName: 'Женя',
                  advantage: 'Цена.',
                  disadvantage: 'Струны.',
                  comment: 'Когда в наличии будет в чёрном цвете?',
                  rating: 5,
                  createAt: '2021-10-22T12:48:05.655Z',
                  guitarId: 6,
                },
                {
                  id: 'e988d13e-cb9f-4e1c-a106-b89cfdf4cdca',
                  userName: 'Саша',
                  advantage: 'Звук, внешний вид.',
                  disadvantage: 'Покрытие.',
                  comment: 'В целом для домашнего использования и дворовых песен в самый раз!',
                  rating: 3,
                  createAt: '2021-11-13T12:48:05.655Z',
                  guitarId: 6,
                },
                {
                  id: 'ca98cb0a-a595-44fb-9dda-569e58027c6a',
                  userName: 'Ольга',
                  advantage: 'Рекомендую!',
                  disadvantage: 'Не рекомендую!',
                  comment: 'Неплохо, но дорого.',
                  rating: 3,
                  createAt: '2021-12-20T12:48:05.655Z',
                  guitarId: 6,
                },
              ],
            },
            {
              id: 8,
              name: 'Честер Plus',
              vendorCode: 'SO135646',
              type: 'electric',
              description: 'Практичная, удобная и простая гитара, созданная для музыкантов, только начинающих сфой путь в мир музыки. Она обладает всеми характеристиками, которые сделали работы компании Честер популярными.',
              previewImg: 'img/guitar-7.jpg',
              stringCount: 4,
              rating: 4.5,
              price: 30000,
              comments: [
                {
                  id: 'ba2ce499-8725-4b59-9449-91e8538dfe4f',
                  userName: 'Ксения',
                  advantage: 'Пока нареканий нет.',
                  disadvantage: 'Быстро приходит в негодность покрытие краской.',
                  comment: 'Гитара для начинающих,самое то.Но струны в комплекте-негодятся,от слова совсем.',
                  rating: 2,
                  createAt: '2022-01-16T12:48:05.655Z',
                  guitarId: 8,
                },
                {
                  id: '70f950dc-a6f2-49ab-a35e-0f3bf71e0f27',
                  userName: 'Даша',
                  advantage: 'Нет.',
                  disadvantage: 'Разбитая гитара. Плохая упаковка.',
                  comment: 'Гитара пришла, за такие деньги неплохо, но гриф чуть кривой, изза этого звук в 5-3 струне звенит, для новичков сойдёт.',
                  rating: 5,
                  createAt: '2022-01-17T12:48:05.655Z',
                  guitarId: 8,
                },
                {
                  id: 'b53db781-2a6a-4a4c-a344-dc6c4e619779',
                  userName: 'Максим',
                  advantage: 'Пока нареканий нет.',
                  disadvantage: 'Покрытие.',
                  comment: 'Купила гитуру, прислали которая несоответствует описанию, струны плохого качества.',
                  rating: 4,
                  createAt: '2021-11-15T12:48:05.655Z',
                  guitarId: 8,
                },
                {
                  id: '9f803247-ef0c-4652-9588-aeb6649486b8',
                  userName: 'Артём',
                  advantage: 'Цена=качество.',
                  disadvantage: 'Не комплект.',
                  comment: 'В общем гитара мне понравилась, профессионально оценить не могу. Есть мелкие недочеты равномерности покрытия краской в некоторых незаметных местах, но для такой цены не существенные.',
                  rating: 5,
                  createAt: '2021-10-15T12:48:05.655Z',
                  guitarId: 8,
                },
                {
                  id: '1f295790-1622-4eb6-8336-7620d3172307',
                  userName: 'Никита',
                  advantage: 'Цена.',
                  disadvantage: 'Не комплект.',
                  comment: 'В целом для домашнего использования и дворовых песен в самый раз!',
                  rating: 3,
                  createAt: '2022-01-15T12:48:05.655Z',
                  guitarId: 8,
                },
                {
                  id: '970e8a76-81ff-4731-a6bc-4804e19f606e',
                  userName: 'Ксения',
                  advantage: 'Цена.',
                  disadvantage: 'Плохие стоковые струны, гриф.',
                  comment: 'Когда в наличии будет в чёрном цвете?',
                  rating: 1,
                  createAt: '2022-01-19T12:48:05.655Z',
                  guitarId: 8,
                },
                {
                  id: '064be64d-9d1b-41a1-ad74-15d58bcd2bd9',
                  userName: 'Артём',
                  advantage: 'Цена=качество.',
                  disadvantage: 'Струны.',
                  comment: 'Когда в наличии будет в чёрном цвете?',
                  rating: 4,
                  createAt: '2021-12-21T12:48:05.655Z',
                  guitarId: 8,
                },
              ],
            },
            {
              id: 12,
              name: 'Честер 7X',
              vendorCode: 'SO123212',
              type: 'electric',
              description: 'Электрогитара класса премиум от ведущего производителя на рынке, компании Честер. Модель 7x - новинка на рынке 2022 года. Семь карбоновых струн гарантируют надёжность и долговечность.',
              previewImg: 'img/guitar-5.jpg',
              stringCount: 7,
              rating: 4,
              price: 35000,
              comments: [
                {
                  id: '4d208ff8-65fe-47c2-a77d-35bec85804d3',
                  userName: 'Никита',
                  advantage: 'Цена.',
                  disadvantage: 'Разбитая гитара. Плохая упаковка.',
                  comment: 'Неплохо, но дорого.',
                  rating: 4,
                  createAt: '2021-10-16T12:48:05.655Z',
                  guitarId: 12,
                },
              ],
            },
            {
              id: 13,
              name: 'Честер 6V',
              vendorCode: 'SO123234',
              type: 'electric',
              description: 'Шестиструнная адаптация модели 7X по более демократичной цене не уступает звучанием моделям высокой ценовой категории.',
              previewImg: 'img/guitar-8.jpg',
              stringCount: 6,
              rating: 4.5,
              price: 14900,
              comments: [
                {
                  id: '21c220d8-5ea9-4f84-93ee-a05bd28bbe51',
                  userName: 'Максим',
                  advantage: 'Недорогая, за такую цену звук отличный.',
                  disadvantage: 'Струны.',
                  comment: 'Купила гитуру, прислали которая несоответствует описанию, струны плохого качества.',
                  rating: 3,
                  createAt: '2022-01-17T12:48:05.655Z',
                  guitarId: 13,
                },
              ],
            },
          ],
        );
    });
  });
});