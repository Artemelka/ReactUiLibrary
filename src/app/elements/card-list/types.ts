export type CardItem = {
    buttonLabel?: string;
    content: string;
    id: number;
    onClick: () => void;
    light?: boolean;
    title: string;
};

export interface CardProps extends CardItem {
    positionIndex: number;
}
export type CardItems = Array<CardItem>;

export interface CardListProps {
    cardItems: Array<CardItem>;
    light?: boolean;
}
