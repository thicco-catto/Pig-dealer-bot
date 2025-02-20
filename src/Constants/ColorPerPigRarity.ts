import { Colors } from "discord.js";

export const COLOR_PER_PIG_RARITY: { readonly [key: string]: number } = {
    Common: Colors.LightGrey,
    Rare: Colors.Yellow,
    Epic: Colors.Purple,
    Legendary: Colors.LuminousVividPink,
    Assembly: Colors.Red,
    ["One of a kind"]: Colors.Gold
}