import React from "react";
import { sortBy } from "lodash";
import classnames from "classnames";

import { ICard, IColor } from "~/game/state";

import Card, { CardWrapper, ICardContext, ICardSize } from "~/components/card";

interface Props {
  cards: ICard[];
  color: IColor;
}

export default function CardPile(props: Props) {
  const { cards, color } = props;

  if (!cards.length) {
    return (
      <CardWrapper color={color} size={ICardSize.MEDIUM} className="ma1" />
    );
  }

  const sortedCards = sortBy(cards, card => card.number);

  return (
    <div className="flex flex-column">
      {sortedCards.map((card, i) => (
        <Card
          key={i}
          card={card}
          context={ICardContext.DISCARDED}
          size={ICardSize.MEDIUM}
          className={classnames("ma1", { "nt3 nt4-l": i > 0 })}
        />
      ))}
    </div>
  );
}