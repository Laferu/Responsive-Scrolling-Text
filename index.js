import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

function ScrollingText(props) {
	const [widthAnimation, setWidthAnimation] = useState(0);
	const delayPixels = props.delayPixels
	const textAnimationId = props.id
	useEffect(() => {
		const textAnimation = document.getElementById(textAnimationId)
		setWidthAnimation(textAnimation.clientWidth + delayPixels)
		const durationPerPixel = props.durationPerPixel
		textAnimation.style.minWidth = "100%"
		const animationDuration = widthAnimation < textAnimation.clientWidth ? durationPerPixel * (textAnimation.clientWidth + delayPixels) : durationPerPixel * (widthAnimation + delayPixels)
		textAnimation.style.width = `${widthAnimation}px`
		textAnimation.style.animationDuration = `${animationDuration}s`
	}, [widthAnimation, delayPixels ,props.durationPerPixel, textAnimationId])

	const TextAnimation = styled.div`
	margin-left: 100%;
	white-space: nowrap;
	animation-name: marquee;
	animation-iteration-count: ${props.animationIterationCount ? props.animationIterationCount : 'infinite'};
	animation-timing-function: ${props.animationTimingFunction ? props.animationTimingFunction : 'linear'};
	
	@keyframes marquee{
		0%{
			margin-left: 100%;
		}
		100%{
			margin-left: -${widthAnimation}px;
		}
	}
	`
  return (
		<>
			<TextAnimation id={textAnimationId}>
				{props.text}
			</TextAnimation>
		</>
  );
}

export default ScrollingText;
