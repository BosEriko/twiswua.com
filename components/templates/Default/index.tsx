import React, { ReactNode } from "react";
import Atom from "@atom";
import Organism from "@organism";

interface DefaultProps {
  children: ReactNode;
  backgroundColor?: string;
  orientation?: "default" | "center" | "minimal";
}

const Default: React.FC<DefaultProps> = ({
  children,
  orientation = "default",
  backgroundColor,
}) => {
  return (
    <div
      className="graph-paper flex flex-col min-h-screen overflow-x-hidden"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <Organism.Header />
      <Atom.Visibility state={"default" == orientation}>
        <div className="flex-1">
          <div className="container mx-auto px-4 py-12 flex flex-col gap-28">{children}</div>
        </div>
      </Atom.Visibility>
      <Atom.Visibility state={"center" == orientation}>
        <div className="flex-1 flex items-center justify-center">
          {children}
        </div>
      </Atom.Visibility>
      <Atom.Visibility state={"minimal" == orientation}>
        <div className="flex-1">{children}</div>
      </Atom.Visibility>
      <Organism.Footer />
    </div>
  );
};

export default Default;
