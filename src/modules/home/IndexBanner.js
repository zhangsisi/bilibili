import React from 'react';
import { Banner, BannerItem } from '../app/Banner';
import { getImageUrl } from '../../plugs/httpRequest';

const IndexBanner = ({ dataList, loading, error }) => {
  let { pic: firstPic } = dataList[0] || {};
  let { pic: lastPic } = dataList[dataList.length - 1] || {};
  return (
    <Banner dataList={dataList} loading={loading} error={error} >
      <BannerItem url={getImageUrl(lastPic)} />
      {
        dataList.map((banner) => {
          let { id, pic } = banner;
          return <BannerItem key={id} url={getImageUrl(pic)} />
        })
      }
      <BannerItem url={getImageUrl(firstPic)} />
    </Banner>
  );
}

export default IndexBanner;