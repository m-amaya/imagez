import { Children, FC, PropsWithChildren } from "react";

import { styled } from "~/styles";
import { genKey } from "~/utils";

const NUM_COLUMNS = 2;
const GAP = 16;

const Grid = styled("div", {
  display: "flex",
});

const ImageWrapper = styled("div", {
  marginBottom: GAP,
});

const ColumnWrapper = styled("div", { flex: 1 });

const ImageGrid: FC<PropsWithChildren> = ({ children }) => {
  const columns: JSX.Element[][] = [[], []];

  Children.map(children, (child, idx) => {
    const colIdx = idx % NUM_COLUMNS;
    columns[colIdx].push(
      <ImageWrapper key={genKey("grid-img")}>{child}</ImageWrapper>,
    );
  });

  return (
    <Grid>
      {columns.map((column, idx) => (
        <ColumnWrapper
          key={genKey("grid-col")}
          css={{ marginLeft: idx ? GAP : 0 }}
        >
          {column}
        </ColumnWrapper>
      ))}
    </Grid>
  );
};

export default ImageGrid;
