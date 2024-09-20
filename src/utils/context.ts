import { createContext } from "react";
import { StatsTypes, TwitterContextValue } from "./types";

export const TwitterContext = createContext<TwitterContextValue>({
    user: {
        name: 'MP',
        avatar: 'https://gravatar.com/avatar/000?d=mp'
    },
    stats: {
        followers: 0,
        following: 0
    },
    changeAvatar: function (url: string | null) {
        console.log(url);
    },
    changeName: function (name: string  | null) {
        console.log(name);
    },
    changeStats: function (statsType: StatsTypes, sum: number) {
        console.log(statsType, sum);
    },
});