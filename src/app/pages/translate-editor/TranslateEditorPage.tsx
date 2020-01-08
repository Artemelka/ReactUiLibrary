import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { FooterAside, LanguageSelect } from '../../components';
import { Button, IconModule, Text } from '../../elements';
import { PageLayout } from '../../layouts';
import { EditorTable, EditorModal } from './components';
import style from './TranslateEditorPage.less';

const cn = classNames.bind(style);
const { Footer, Main, Page } = PageLayout;

interface TranslateEditorPageProps {
    closeModal: () => void;
    isOpenModal: boolean;
    labels: Record<string, string>;
    modalData: Record<string, string>;
    openModal: (data: Record<string, string>) => void;
}

export class TranslateEditorPageComponent extends Component<TranslateEditorPageProps> {
    handleRemoveRow = (rowData: Array<string>) => console.log('handleRemoveRow', rowData);

    handleAddKey = () => {
        const { modalData, openModal } = this.props;

        openModal(Object.keys(modalData).reduce((acc, name: string) => ({...acc, [name]: '' }), {}));
    };

    render() {
        const { closeModal, isOpenModal, labels, modalData, openModal } = this.props;

        return (
            <Page>
                <Main withoutHeader fullWidth>
                    <div className={cn('Translate-editor-page')}>
                        <Text.H1>{labels['translate-editor']}</Text.H1>
                        <div className={cn('Translate-editor-page__action-bar')}>
                            <Button.IconLabel
                                iconName={IconModule.IconNames.PLUS}
                                label={labels['add-key'] || 'add-key'}
                                onClick={this.handleAddKey}
                            />
                        </div>
                        <EditorTable
                            onEditRow={openModal}
                            onRemoveRow={this.handleRemoveRow}
                        />
                        <EditorModal
                            editRowData={modalData}
                            opened={isOpenModal}
                            onClose={closeModal}
                            title={labels.editor}
                        />
                    </div>
                </Main>
                <Footer footerAside={FooterAside} rightContent={LanguageSelect}/>
            </Page>
        );
    }
}
