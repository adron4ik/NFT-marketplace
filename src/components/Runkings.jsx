import './Runkings.css'
import { useEffect, useState } from "react";

const Rankings = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch("https://api.opensea.io/api/v2/collections?offset=0&limit=10", {
      headers: { "X-API-KEY": "295d10f713184bfcbcb05be51f7daa42" }
    })
      .then(r => r.json())
      .then(data => setCollections(data.collections || [])); 
  }, []);

  useEffect(() => {
  console.log("Collections updated:", collections);
}, [collections]);

  return ( 
    <div className="rankings-wrapper">
      <div className="rank-info-title">
        <h1>Top creators</h1>
        <p>Checkout Top Rated Creators on the NFT Marketplace</p>
      </div>

      <div className="ranking-info-holo">
        <div className="ordinal-sect">
          <p>#</p>
          <p>Artists</p>
        </div>
        <div className="info-holo">
          <p>Change</p>
          <p>NFTs Sold</p>
          <p>Volume</p>
        </div>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {collections.map((col,i) => {
          const stats = col.stats || {};
          return (
            <li className="ranking-item" key={col.slug || i}>
              <span>{i + 1}</span>
              <div className="col col-artist">
                <img
                  src={col.image_url}
                  alt={col.name}
                  onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/48'; }}
                />
                <div className="artist-meta">
                  <div className="artist-name">{col.name}</div>
                  <div className="artist-slug">{col.slug}</div>
                </div>
              </div>
              <div className="col col-stats">
                <p>{stats.one_day_change != null ? (stats.one_day_change * 100).toFixed(2) + "%" : "0%"}</p>
                <p>{stats.total_sales ?? 0}</p>
                <p>{stats.total_volume != null ? stats.total_volume.toFixed(2) + " ETH" : "0 ETH"}</p>

              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
 
export default Rankings;