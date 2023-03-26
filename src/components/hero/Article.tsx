import React from 'react';
import { IHeroDetails } from '../../interfaces/interfaces';
import Skeleton from 'react-loading-skeleton';

interface IArticleProps {
  data: IHeroDetails[];
  index: number;
  isHeroDataLoaded: boolean;
}

export const Article: React.FC<IArticleProps> = ({
  data,
  index,
  isHeroDataLoaded,
}) => {
  console.log(index);
  return (
    <article className="d-flex flex-column-reverse flex-lg-row w-100 position-relative">
      {/* <div className="position-absolute bg-primary h-100 yellow-detail"></div> */}
      <div className="w-100 bg-grey-1000 h-100 article-left">
        <div className="container-fluid h-100 w-100 d-flex justify-content-center align-items-center mt-3 mt-sm-3 mt-lt-5  bg-grey-1000 article-left-wrapper">
          <div className="ms-3 article-left-left">
            <p className="text-uppercase text-primary">
              {
                !isHeroDataLoaded
                ?
                data[index]?.smallTitle
                :
                <Skeleton width={40}/>
              }
            </p>

            <h1 className="fw-bold fs-5">
              {!isHeroDataLoaded ? (
                <>
                  {data[index]?.titleNormalBefore}{' '}
                  <span className="text-primary">
                    {data[index]?.titleAccent}
                  </span>{' '}
                  {data[index]?.titleNormalAfter}{' '}
                </>
              ) : (
                <Skeleton count={1}/>
              )}
            </h1>
            <p className="mt-3 mt-sm-4 fs-13">
              {!isHeroDataLoaded ? data[index]?.text : <Skeleton count={4} />}
            </p>
            <div>
              {
                !isHeroDataLoaded
                ?
              <button className="btn btn-primary mt-2 mt-sm-3 rounded-2">
                Contact us
              </button>
              :
              <Skeleton width={100} height={40}/>
              }
            </div>
          </div>
          <div className="h-100 article-left-right"></div>
        </div>
      </div>
      <div className="w-100 overflow-hidden article-right position-relative">
        <img
          src={data[index]?.image}
          alt="img"
          draggable="false"
          className="w-100"
        />
      </div>
    </article>
  );
};