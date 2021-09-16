import React from 'react';
import afghan1Img from '../assets/protextafgans.jpg';
import covidImg1 from '../assets/covid3.jpg';
import haitiImg from '../assets/haiti1.jpg';
import climateChangeImg from '../assets/climatechange3.jpg';
import afghanImg2 from '../assets/afghan.jpg';
import covidImg2 from '../assets/covid2.jpg';
import haitiImg3 from '../assets/haiti4.jpg';
import donate from '../assets/donateSeed';
import postSeed from '../assets/postSeed';
const Trending = () => {
	return (
		<>
			<h3 className="causes text-center fw-bolder">Trending</h3>
			<hr />
			<p className="text-center">Twitter</p>
			<p className="text-center">
				<a href="https://twitter.com/search?q=%23saveAfghans">#saveAfghans</a>
				<br />
				<a href="https://twitter.com/search?q=%23Kabul">#Kabul</a>
				<br />
				<a href="https://twitter.com/search?q=%23Afghanistan">#Afghanistan</a>
				<br />
				<a href="https://twitter.com/search?q=%23taliban">#taliban</a>
				<br />
				<a href="https://twitter.com/search?q=%23support">#support</a>
				<br />
				<a href="https://twitter.com/search?q=%23america">#america</a>
				<br />
				<a href="https://twitter.com/search?q=%23saveAfghans">#saveAfghans</a>
				<br />
				<a href="https://twitter.com/search?q=%23kabulafghanistan">
					#kabulafghanistan
				</a>
				<br />
				<a href="https://twitter.com/search?q=%23peace">#peace</a>
				<br />
				<a href="https://twitter.com/search?q=%23covid19">#Covid19</a>
				<br />
				<a href="https://twitter.com/search?q=%23Coronavirus">#Coronavirus</a>
				<br />
				<a href="https://twitter.com/search?q=%23Covid">#covid</a>
				<br />
				<a href="https://twitter.com/search?q=%23ClimateStrike">
					#ClimateStrike
				</a>
				<br />
				<a href="https://twitter.com/search?q=%23ClimateCrisis">
					#ClimateCrisis
				</a>
				<br />
				<a href="https://twitter.com/search?q=%23climatechange">
					#climatechange
				</a>
				<br />
			</p>
			<br />
			<h3 className="news text-center fw-bolder">News</h3>
			<hr />
			<div className="my-3">
				<div className="card" style={{ width: '15rem' }}>
					<img src={afghanImg2} className="card-img-top" alt="..." />
					<div className="card-body">
						<p className="card-text text-center text-uppercase">
							<a
								href="https://www.nytimes.com/live/2021/08/17/world/taliban-afghanistan-news"
								className="sm"
							>
								Fearful people of Afghanistan in search of a way out
							</a>
						</p>
					</div>
				</div>
			</div>
			<div className="my-3">
				<div className="card mt=3" style={{ width: '15rem' }}>
					<img src={covidImg2} className="card-img-top" alt="..." />
					<div className="card-body">
						<p className="card-text text-center text-uppercase">
							<a
								href="https://www.nytimes.com/live/2021/08/20/world/covid-delta-variant-vaccine"
								className="sm"
							>
								F.D.A approved Pfizer on the way
							</a>
						</p>
					</div>
				</div>
			</div>
			<div className="my-3">
				<div className="card mt=3" style={{ width: '15rem' }}>
					<img src={haitiImg3} className="card-img-top" alt="..." />
					<div className="card-body">
						<p className="card-text text-center text-uppercase">
							<a
								href="https://www.npr.org/2021/08/20/1029921352/haitian-quake-victims-rush-aid-sites-and-take-food-and-supplies"
								className="sm"
							>
								Haitian quake survivors in need of aid
							</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Trending;
