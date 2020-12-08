import React from 'react';
import { Button, Input } from 'elements';
import { artStoreConnect } from 'services';
import { countSelector, valueSelector, countPlusAction, setStoreAction } from '../../redux';

type PageContentProps = {
    onButtonClick: () => void;
    onInputChange: (value: string) => void;
    countValue: number;
    inputValue: string;
};

export const PageContentComponent = ({ onButtonClick, onInputChange, countValue, inputValue }: PageContentProps) => {
    const handleInputChange = (event: any, inputValue: string) => {
        onInputChange(inputValue);
    };

    return (
        <div>
            <h2>Art Redux Page</h2>
            <Button label="Change store" onClick={onButtonClick}/>
            <p>count: {countValue}</p>
            <Input.Text value={inputValue} id="1" name="test" onChange={handleInputChange} width={300} />
            <p>value: {inputValue}</p>
        </div>
    );
};

export const PageContent = artStoreConnect({
    mapStateToProps: (state) => ({
        countValue: countSelector(state),
        inputValue: valueSelector(state)
    }),
    mapDispatchToProps: {
        onButtonClick: countPlusAction,
        onInputChange: setStoreAction
    }
})(PageContentComponent);
