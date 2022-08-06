import { Video } from "../../Components/Video";
import { Section, VideoSection } from "./style";

// Images
import WhatIf from "../../assets/what_if.jpg";
import Veronica from "../../assets/veronica.jpg";
import Invocacao2 from "../../assets/invocacao_2.jpg";
import Loki from "../../assets/loki.jpg";
import LuaNova from "../../assets/lua_nova.jpg";
import SilverLake from "../../assets/silver_lake.jpg";

export function Home() {
  return (
    <Section>
      <VideoSection>
        <Video link="/what-if-season-2" src={WhatIf} title="What If Season 2" />
        <Video
          link="/bom-dia-veronica"
          src={Veronica}
          title="Bom Dia, Verônica"
        />
        <Video
          link="/invocacao-do-mal-2"
          src={Invocacao2}
          title="Invocação do Mal 2"
        />
        <Video link="/" src={Loki} title="Loki Season 2" />
        <Video link="/" src={LuaNova} title="Crepúsculo: Lua Nova" />
        <Video
          link="/filmes/o-misterio-de-silver-lake"
          src={SilverLake}
          title="O Mistério de Silver Lake"
        />
      </VideoSection>
    </Section>
  );
}
