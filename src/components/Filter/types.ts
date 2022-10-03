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
    multiSelect?: boolean;
    categoryId: string;
    name: string;
    filters: Array<{label: string; value: string}>;
};

export interface MyProps {
    onChange: (value: ActiveSubItems[]) => void;
    options: Array<filter>;
    variant?: string;
}
