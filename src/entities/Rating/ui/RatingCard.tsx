import type { FC } from 'react';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { detectMobileDevice } from '@/shared/lib/detectDevice/detectMobileDevice';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Drawer } from '@/shared/ui/Drawer';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Text } from '@/shared/ui/Text';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard: FC<RatingCardProps> = (props) => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(props.rate ?? 0);
    const [feedBack, setFeedBack] = useState('');

    const onSelectStars = useCallback(
        (selectedStars: number) => {
            setStarsCount(selectedStars);
            if (props.hasFeedback) {
                setIsModalOpen(true);
            } else {
                props.onAccept?.(starsCount);
            }
        },
        [props, starsCount],
    );

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        props.onAccept?.(starsCount, feedBack);
    }, [props, starsCount, feedBack]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        props.onCancel?.(starsCount);
    }, [starsCount, props]);

    const modelContent = (
        <VStack max gap={'32'}>
            <Text text={props.feedbackTitle} />
            <Input
                placeholder={t('Ваш отзыв') || ''}
                value={feedBack}
                onChange={setFeedBack}
            />
        </VStack>
    );

    return (
        <Card className={props.className} max>
            <VStack align={'center'} gap={'16'}>
                <Text text={props.rate ? t('Ваша оценка') : props.title} />
                <StarRating
                    onSelect={onSelectStars}
                    selectedStars={props.rate}
                />
                {detectMobileDevice() ? (
                    <Drawer isOpen={isModalOpen} onClose={cancelHandler}>
                        <VStack max gap={'32'}>
                            {modelContent}
                            <Button
                                onClick={acceptHandler}
                                theme={ButtonTheme.OUTLINE}>
                                {t('Отправить')}
                            </Button>
                        </VStack>
                    </Drawer>
                ) : (
                    <Modal isOpen={isModalOpen} lazy>
                        <VStack max gap={'32'}>
                            {modelContent}
                            <HStack max justify={'between'}>
                                <Button
                                    onClick={cancelHandler}
                                    theme={ButtonTheme.OUTLINE_RED}>
                                    {t('Закрыть')}
                                </Button>
                                <Button
                                    onClick={acceptHandler}
                                    theme={ButtonTheme.OUTLINE}>
                                    {t('Отправить')}
                                </Button>
                            </HStack>
                        </VStack>
                    </Modal>
                )}
            </VStack>
        </Card>
    );
};
