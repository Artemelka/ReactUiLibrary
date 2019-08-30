export interface CardProps {
    buttonLabel?: string;
    content: string;
    id: number;
    onClick: () => void;
    light?: boolean;
    positionIndex: number;
    title: string;
}

export interface CardListProps {
    cardItems: Array<CardProps>;
    light?: boolean;
}
