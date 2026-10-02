import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comics: [
    {
      id: nanoid(),
      name: "Менше зло",
      author: "Яцек Рембісь",
      year:'2022-2026',
      publishYear: "2026",
      genre: "фентезі",
      type: 'комікс',
      publisher: "Вовкулака",
      cover: "https://pub-24f095c431e644d28901f47df2584582.r2.dev/items/books/vidmak-menshe-zlo-alternatyvna-obkladynka.png",
      pages: "112",
      color: "#224c7e",
      textColor: "#a9bbb8",
      read: false,
      series: true,
      seriesName: 'Відьмак',
      volumes: "10",
      part:'10',
      rating: "none",
      description: "Дещиця Істини. Дізнайтеся правду, що ховається за казками. Ґеральт натрапляє на віддалений маєток, де його зустрічає незвичний господар — звір зі свідомістю людини. Істота запрошує відьмака всередину й оповідає історії про свою родину, своє минуле і… своє прокляття. Тягар переступів прирік його на життя в тілі звіра… Про такий вирок чули хіба в казках. Утім, можливо, у цих вигадках ховається дещиця істини, здатна допомогти йому уникнути тяжкої долі й врятувати від неминучого? Менше зло. Розповідь про пристрасть, встановлення справедливості й корінь зла. Місцевий чаклун, заточений у своїй вежі, просить Ґеральта вбити монстра, що на нього полює — а саме юнку, яка народилася із прокляттям Чорного сонця. Коли відьмак знаходить дівчину, та стверджує, що справжнім монстром є чаклун і що він здійснив невимовно жахливі вчинки в ім’я своїх забобонів. Вердикт Ґеральта перед мінливим обличчям зла матиме лише трагічні наслідки.",
      language:'українська',
      dateOfReading:'',
      dateOfBuying:'09 травня 2026'
        },
      
    
  ]
}
  

const comicsSlice = createSlice({
    name: 'comics',
    initialState: initialState.comics,
    

  reducers: {
    addComic: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, author) {
        return {
          payload: {
            name,
            id: nanoid(),
            author: author,
          },
        };
      },
    },
    deleteComic(state, action) {
      return state.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addComic, deleteComic } = comicsSlice.actions;
export const comicsReducer = comicsSlice.reducer;
