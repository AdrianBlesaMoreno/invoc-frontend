
export interface State {
    selectedId: number;
    count: number;
    loading: boolean;
}

export const initialState: State = {
     selectedId: null,
     count: 0,
     loading: false
};

