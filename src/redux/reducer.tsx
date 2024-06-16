export const initialState: pageState = {
  page: [],
  boolModal: false,
};

interface pageItem {
  _id: string;
  price: number;
  action: unknown;
  
}

interface pageState {
  page: pageItem[];
  boolModal: boolean;
}
interface pageAction {
  type: string;
  payload?: { item: pageItem };
  item: pageItem;
}

export const getpageTotal = (page: pageItem[]) =>
  page.reduce((amount, item) => item.price + amount, 0);

function reducer(state: pageState, action: pageAction): pageState {
  console.log(action);
  switch (action.type) {
    case "SHOW_BOOK":
      return {
        ...state,
        page: [action.item], 
      };

    case "OPEN_MODAL":
      return {
        ...state,
        boolModal: !state.boolModal
      };
    default:
      return state;
  }
}
export default reducer;

//4.19npm~~
