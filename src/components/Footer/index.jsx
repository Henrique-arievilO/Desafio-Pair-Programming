import React from "react";
import * as S from "./style";
import ig from "../../assets/images/instagram.svg";
import tt from "../../assets/images/twitter.svg";
import fb from "../../assets/images/facebook.svg";
import pin from "../../assets/images/pinterest.svg";

export default function Footer() {
	return (
		<S.FooterStyle>
			<S.MediaNav>
				<S.MediaIcons>
					<a href="*">
						<S.Img src={ig} alt="instagram logo" />
					</a>
					<a href="*">
						<S.Img src={tt} alt="twitter logo" />
					</a>
					<a href="*">
						<S.Img src={fb} alt="facebook logo" />
					</a>
					<a href="*">
						<S.Img src={pin} alt="pinterest logo" />
					</a>
				</S.MediaIcons>
				<S.Nav>
					<ul>
						<a href="#about">
							<li>about</li>
						</a>
						<a href="#recipes">
							<li>recipes</li>
						</a>
						<a href="#subscribe">
							<li>subscribe</li>
						</a>
					</ul>
				</S.Nav>
			</S.MediaNav>
			<S.Credits>
				<p>
					Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência:
					https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/
				</p>
			</S.Credits>
		</S.FooterStyle>
	);
}
