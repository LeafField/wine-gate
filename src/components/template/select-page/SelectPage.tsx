import React, { FC } from "react";
import SelectHero from "../../molecules/select-hero/SelectHero";
import SelectedHeader from "../../atoms/selected-header/SelectedHeader";
import SelectSection from "../../organisms/select-section/SelectSection";
import { categoryFavoriteSmallArticleFetcher } from "../../../utils/categoryFetcher";
import { CategoryFavoriteSmallArticleProps } from "../../../types/article_types";

type Props = {
  sober: CategoryFavoriteSmallArticleProps;
  fruity: CategoryFavoriteSmallArticleProps;
  tart: CategoryFavoriteSmallArticleProps;
  white: CategoryFavoriteSmallArticleProps;
  sweet: CategoryFavoriteSmallArticleProps;
};

const SelectPage: FC<Props> = ({ fruity, sober, sweet, tart, white }) => {
  return (
    <>
      <SelectHero title="ワインの簡単な選び方" />
      <main className="mx-auto mt-15 max-w-[1440px] px-4 main tablet:mt-30 tablet:px-6">
        <div>
          <SelectedHeader title="赤ワイン" />
          <SelectSection title="渋い" wines={sober} link="sober">
            タンニンが強さが強調されていたり、ブラックベリーやカシス、プルーン等黒系果実で表現される事も多い種類です。
            <br />
            タンニンは口の中で渋みを感じさせる成分であり、若いワインでは特に強く感じられることがあります。
            <br />
            カベルネ・ソーヴィニヨンやシラーなどの品種が一般的にこのタイプのワインに含まれます。
            <br />
            主に色が濃く重めの肉料理に合いやすいです。
          </SelectSection>
          <SelectSection title="果実味豊か" wines={fruity} link="fruity">
            果実味の豊かさが強調されていたり、プラムやラズベリー等と表現されている事が多い種類です。
            <br />
            ブドウの風味が強く、渋みや酸味は程よく飲みやすいワインが多いです。
            <br />
            バランスのいいワインの為、色が濃い目の料理であれば殆どの料理に合わせる事が出来るでしょう。
            <br />
            代表的な品種はメルロー、カルメネールです。
            <br />
            日々の食卓に合わせやすいデイリーワイン向きが多い種類です。
          </SelectSection>
          <SelectSection title="酸味が強い" wines={tart} link="tart">
            こちらも果実味の豊かさが強調される事が多いですが、ストロベリーやラズベリー等赤系果実に例えられる事が多く、また繊細さや複雑さ、華やかさが強調される事が多い種類です。
            <br />
            この種類のワインはラベルの表記だと飲みやすそうに感じますが、赤ワインを飲みなれていない人が苦手とするワイン特有の酸っぱさがあるワインが多く、ある程度赤ワインに飲みなれてから挑戦した方がいい種類です。
            <br />
            主な品種はピノノワール、ガメイです。
            <br />
            軽めの肉料理やチーズ系のつまみに合わせやすく、ガブガブ飲めるワインが多いですがこの種類のワインで美味しい物は値段が高い事が多いので注意が必要です。
          </SelectSection>
        </div>
        <div className="mt-15">
          <SelectedHeader title="白ワイン" />
          <SelectSection title="辛口白" link="white" wines={white}>
            辛口白ワインはハーブ系、アロマ系、ニュートラル系等色々なジャンルがありますが、当サイトで扱うような比較的安価なワインですと分かりやすい差が出にくい為まとめて「辛口」としています。
            <br />
            赤ワインが値段が上がる程バランスが良くなっていくのに対して、白ワインは値段が上がる程上記の風味による特徴が強く出る傾向があります。
            <br />
            代表品種はシャルドネです。
          </SelectSection>
          <SelectSection title="甘口白" link="sweet" wines={sweet}>
            甘口ワインは安い物だと糖分を添加する事で甘くしていますが、高級な甘口ワインは甘さが残る程濃縮されたブドウを使って作ります。
            <br />
            甘口ワインというとワインを飲みなれていない方向けというイメージですが、高級な甘口ワインは濃縮されたブドウ本来の甘さと風味を楽しむ事が出来るため、甘口ワインはワイン通にもよく親しまれています。
            <br />
            程よい甘さと酸味で辛い料理に合わせやすい物から、デザートワインと呼ばれる非常に甘い食後向けのワインまで甘口ワインだけでも様々な種類がありますが、多すぎるので当サイトではまとめて甘口ワインとしています。
            <br />
          </SelectSection>
        </div>
      </main>
    </>
  );
};

export default SelectPage;
