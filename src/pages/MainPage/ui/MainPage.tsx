import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { AppLink } from '@/shared/ui/AppLink';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Card, CardTheme } from '@/shared/ui/Card';

const MainPage: FC = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid={'MainPage'}>
            <VStack gap={'8'}>
                <VStack gap={'16'}>
                    <AppLink to="/reports/unit.html" target="_blank">
                        {t('Unit tests report example')}
                    </AppLink>
                    <AppLink to="/reports/loki.html" target="_blank">
                        {t('Screenshot tests report example')}
                    </AppLink>
                    <AppLink to="/storybook/" target="_blank">
                        {t('Storybook')}
                    </AppLink>
                </VStack>
                <Card title={'Admin'} theme={CardTheme.OUTLINE}>
                    <VStack>
                        <div>Username: admin</div>
                        <div>Password: 123</div>
                        <div>Roles: Admin</div>
                        <HStack align={'start'}>
                            Feature:
                            <Card theme={CardTheme.NORMAL}>
                                <VStack>
                                    <div>isArticleRatingEnabled: true</div>
                                    <div>
                                        isArticleRecommendationEnabled: true
                                    </div>
                                </VStack>
                            </Card>
                        </HStack>
                        <div>
                            2 additional sections are at article detail page.
                        </div>
                        <div>
                            Additional menu item in Avatar button (by Role).
                        </div>
                    </VStack>
                </Card>
                <Card title={'User'} theme={CardTheme.OUTLINE}>
                    <VStack>
                        <div>Username: user</div>
                        <div>Password: 123</div>
                        <div>Roles: User</div>
                        <HStack align={'start'}>
                            Feature:
                            <Card theme={CardTheme.NORMAL}>
                                <VStack>
                                    <div>isArticleRatingEnabled: false</div>
                                    <div>
                                        isArticleRecommendationEnabled: false
                                    </div>
                                </VStack>
                            </Card>
                        </HStack>
                    </VStack>
                </Card>
            </VStack>
        </Page>
    );
};

export default MainPage;
