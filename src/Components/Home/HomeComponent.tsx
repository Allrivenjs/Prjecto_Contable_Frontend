import { createStyles, Group, Paper, SimpleGrid, Text } from '@mantine/core';
import {
    UserPlus,
    Discount2,
    Receipt2,
    Coin,
    ArrowUpRight,
    ArrowDownRight,
} from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    value: {
        fontSize: 22,
        fontWeight: 700,
        lineHeight: 1,
    },

    diff: {
        lineHeight: 1,
        display: 'flex',
        alignItems: 'center',
    },

    icon: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
    },

    title: {
        fontWeight: 500,
        textTransform: 'uppercase',
    },
}));

const icons = {
    user: UserPlus,
    discount: Discount2,
    receipt: Receipt2,
    coin: Coin,
};

interface StatsGridProps {
    data: { title: string; icon: string; value: string; diff: number }[];
}

const HomeComponent = ({ data } : StatsGridProps) => {
    const { classes } = useStyles();

    const stats = data.map((stat) => {
        type icon = keyof typeof icons;
        const Icons: icon = stat.icon as icon;
        const Icon = icons[Icons];

        const DiffIcon = stat.diff >= 0 ? ArrowUpRight : ArrowDownRight;

        return (
            <Paper withBorder p="sm" radius="md" key={stat.title}>
                <Group position="apart">
                    <Text size="xs" color="dimmed" className={classes.title}>
                        {stat.title}
                    </Text>
                    <Icon className={classes.icon} size={22} />
                </Group>
                <Group align="flex-end" spacing="xs" mt={25}>
                    <Text className={classes.value}>{stat.value}</Text>
                    <Text
                        color={stat.diff >= 0 ? 'teal' : 'red'}
                        size="sm"
                        weight={500}
                        className={classes.diff}
                    >
                        <span>{stat.diff}%</span>
                        <DiffIcon size={16} />
                    </Text>
                </Group>

                <Text size="xs" color="dimmed" mt={7}>
                    Compared to previous month
                </Text>
            </Paper>
        );
    });
    return (
        <div>
            <SimpleGrid
                cols={4}
                className={classes.root}
                breakpoints={[
                    { maxWidth: 'md', cols: 2 },
                    { maxWidth: 'xs', cols: 1 },
                ]}
            >
                {stats}
            </SimpleGrid>
        </div>
    );
}



export default HomeComponent;
