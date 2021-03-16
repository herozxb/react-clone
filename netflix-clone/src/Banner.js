import React, { useState, useEffect } from "react";
import axios from "./axios"
import requests from "./requests"
import "./Banner.css"

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner(  ) {

	const [ movie, setMovie ] = useState([]);

	useEffect(()=>{

		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			//console.log(request);
			setMovie(request.data.results[
				Math.floor(Math.random()*request.data.results.length)
				]);
			return request;
		}

		fetchData();

	}, [] );

	console.log(movie);

	function truncate(str,n){
		return str?.length>n ? str.substr(0,n-1) + "..." : str;
	}
	return(
		<header className="banner"
			style={
				{
					backgroundSize:"cover",
					backgroundImage:`url(
						"https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
						)`,
					backgroundPostion:"center center",
				}

			}
		>
			<div className="banner__contents">
				<h1 className="banner__title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__descriptoin">
					{truncate(movie?.overview,100)}
				</h1>
			</div>
			<div className="banner__fadeBottom"/>
		</header>

		)
}

export default Banner