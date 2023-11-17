import LinkBox from "./components/LinkBox";
import { Stack, Container, Center, Image, Flex, ActionIcon, Text } from '@mantine/core';
import {
    IconBrandApplePodcast,
    IconBrandDiscordFilled,
    IconBrandFacebookFilled,
    IconBrandInstagram,
    IconBrandSpotify,
    IconBrandTwitterFilled,
    IconBrandYoutubeFilled,
    IconChartArrowsVertical,
    IconFileBarcode,
    IconPencil,
    IconWorld
} from '@tabler/icons-react';

const links = [
    {
        title: "Our Website",
        link: "https://otafest.com",
        icon: <IconWorld size={28} />
    },
    {
        title: "Get Tickets",
        link: "https://Otafest.eventbrite.ca/?aff=linkpage#tickets",
        icon: <IconFileBarcode size={28} />
    },
    {
        title: "Podcast (Apple)",
        link: "https://otafe.st/podcastapple",
        icon: <IconBrandApplePodcast size={28} />
    },
    {
        title: "Podcast (Spotify)",
        link: "https://otafe.st/podcastspotify",
        icon: <IconBrandSpotify size={28} />
    },
    {
        title: "Press Kit",
        link: "https://otafe.st/press",
        icon: <IconPencil size={28} />
    },
    {
        title: "Statistics",
        link: "https://stats.otafest.com",
        icon: <IconChartArrowsVertical size={28} />
    },
]

const socials = [
    {
        icon: <IconBrandFacebookFilled size={28} />,
        link: "https://facebook.com/otafest"
    },
    {
        icon: <IconBrandTwitterFilled size={28} />,
        link: "https://twitter.com/otafest"
    },
    {
        icon: <IconBrandInstagram size={28} />,
        link: "https://instagram.com/otafest"
    },
    {
        icon: <IconBrandYoutubeFilled size={28} />,
        link: "https://youtube.com/otafest"
    },
    {
        icon: <IconBrandDiscordFilled size={28} />,
        link: "https://discord.gg/otafest"
    },
]

export default function Index() {
    return (
        <Container m="0" p="50px" bg="#D5EDFA" mih="100vh" fluid>
            <Center>
                <Stack my="0" p="0">
                    <Image align="center" src="./otafest-katakana.png" />
                    <Text align="center">Calgary, Alberta, Canada</Text>
                    <Flex
                        mih={50}
                        gap="md"
                        justify="center"
                        align="center"
                        direction="row"
                        wrap="wrap"
                    >

                        {socials.map(social => {
                            return (
                                <ActionIcon
                                    key={social.link}
                                    variant="transparent"
                                    color="cyan"
                                    size="xl"
                                    component="a"
                                    href={social.link}
                                >
                                    {social.icon}
                                </ActionIcon>
                            );
                        })}
                    </Flex>
                </Stack>
            </Center>
            <Center>
                <Stack
                    my="lg"
                    w="min(600px, 100%)"
                    justify="flex-start"
                >
                    {links.map(link => {
                        return (
                            <LinkBox key={link.title} title={link.title} subtitle={link.subtitle} link={link.link} icon={link.icon} />
                        );
                    })}
                </Stack>
            </Center>
        </Container>
    )
}