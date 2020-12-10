import React from 'react';
import { Button, Input } from 'elements';
import { artStoreConnect } from 'services';
import {
    countSelector,
    valueSelector,
    valueBSelector,
    countPlusAction,
    setStoreAction,
    testActionSaga
} from '../../redux';

type PageContentProps = {
    onButtonClick: () => void;
    onInject: () => void;
    onInputChange: (value: string) => void;
    onRemove: () => void;
    onStartSaga: () => void;
    countValue: number;
    inputValue: string;
    isInject: boolean;
    valueB: string;
};

export const PageContentComponent = ({
    onButtonClick,
    onInject,
    onInputChange,
    onRemove,
    onStartSaga,
    countValue,
    inputValue,
    isInject,
    valueB
}: PageContentProps) => {
    const handleInputChange = (event: any, inputValue: string) => {
        onInputChange(inputValue);
    };

    return (
        <div>
            <h2>Art Redux Page</h2>
            <Button label="Change store" onClick={onButtonClick}/>
            <p>count: {countValue}</p>
            {!isInject && <Button label="Inject reducer" onClick={onInject}/>}
            {isInject && (
                <>
                    <Input.Text value={inputValue} id="1" name="test" onChange={handleInputChange} width={300} />
                    <p>value: {valueB}</p>
                    <div>
                        <Button label="Run saga" onClick={onStartSaga}/>
                    </div>
                    <br/><br/>
                    <Button label="Remove reducer" onClick={onRemove}/>
                </>
            )}
        </div>
    );
};

export const PageContent = artStoreConnect({
    mapStateToProps: (state) => ({
        countValue: countSelector(state),
        inputValue: valueSelector(state),
        valueB: valueBSelector(state)
    }),
    mapDispatchToProps: {
        onButtonClick: countPlusAction,
        onInputChange: setStoreAction,
        onStartSaga: testActionSaga
    }
    // @ts-ignore
})(PageContentComponent);
