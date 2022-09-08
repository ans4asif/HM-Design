export type ActiveSubItems = {
    name: string;
    selectedFilters: string[];
};
export type SelectedItem = {
    parent: string;
    value: string;
    label: string;
};

export type filter = {
    categoryId: string;
    name: string;
    filters: Array<{label: string; value: string}>;
};

export interface Props {
    onChange: (value: ActiveSubItems[]) => void;
    options: Array<filter>;
}
