import React, { useState } from "react";
import atomize from "@quarkly/atomize";

const Bookingcalendar = ({
	containerWidth = "28rem",
	borderRadius = "0.75rem",
	headerPadding = "1.5rem",
	contentPadding = "1.5rem",
	dayButtonHeight = "2.5rem",
	dayButtonRadius = "0.5rem",
	fontSize = "0.875rem",
	headerFontSize = "0.875rem",
	timesFontSize = "1.125rem",
	buttonSize = "2rem",
	gridGap = "0.25rem",
	marginBottom = "1rem",
	marginTop = "1.5rem",
	timesGap = "0.5rem",
	summaryPadding = "1rem",
	buttonPadding = "0.75rem",
	...props
}) => {
	const [currentDate, setCurrentDate] = useState(new Date());
	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState(null);
	const timeSlots = Array.from({
		length: 17
	}, (_, i) => {
		const hour = Math.floor(i / 2) + 9;
		const minute = i % 2 === 0 ? '00' : '30';
		return `${hour.toString().padStart(2, '0')}:${minute}`;
	});

	const getDaysInMonth = date => {
		return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
	};

	const getFirstDayOfMonth = date => {
		return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
	};

	const navigateMonth = direction => {
		setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
		setSelectedDate(null);
		setSelectedTime(null);
	};

	const handleDateSelect = day => {
		const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
		setSelectedDate(selected);
		setSelectedTime(null);
	};

	const handleBooking = () => {
		alert(`Booking confirmed for ${selectedDate.toLocaleDateString('default', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})} at ${selectedTime}`);
	};

	return <div {...props} style={{
		width: containerWidth,
		display: "inline-block"
	}}>
		            
		<div style={{
			width: "100%",
			backgroundColor: "white",
			borderRadius: borderRadius,
			boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
		}}>
			                
			<div style={{
				padding: `${headerPadding} ${headerPadding} 0 ${headerPadding}`
			}}>
				                    
				<div style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center"
				}}>
					                        
					<button onClick={() => navigateMonth(-1)} style={{
						backgroundColor: "transparent",
						border: "none",
						padding: "0.5rem",
						cursor: "pointer",
						borderRadius: dayButtonRadius,
						display: "inline-flex",
						height: buttonSize,
						width: buttonSize,
						alignItems: "center",
						justifyContent: "center",
						fontSize: "1.25rem"
					}} onMouseOver={e => e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)"} onMouseOut={e => e.currentTarget.style.backgroundColor = "transparent"}>
						                            ←
                        
					</button>
					                        
					<span style={{
						fontSize: headerFontSize,
						fontWeight: "600"
					}}>
						                            
						{currentDate.toLocaleDateString('default', {
							month: 'long',
							year: 'numeric'
						})}
						                        
					</span>
					                        
					<button onClick={() => navigateMonth(1)} style={{
						backgroundColor: "transparent",
						border: "none",
						padding: "0.5rem",
						cursor: "pointer",
						borderRadius: dayButtonRadius,
						display: "inline-flex",
						height: buttonSize,
						width: buttonSize,
						alignItems: "center",
						justifyContent: "center",
						fontSize: "1.25rem"
					}} onMouseOver={e => e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)"} onMouseOut={e => e.currentTarget.style.backgroundColor = "transparent"}>
						                            →
                        
					</button>
					                    
				</div>
				                
			</div>
			                
			<div style={{
				padding: contentPadding
			}}>
				                    
				<div style={{
					display: "grid",
					gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
					gap: gridGap,
					marginBottom: marginBottom
				}}>
					                        
					{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day} style={{
						textAlign: "center",
						fontSize: fontSize,
						fontWeight: "500"
					}}>
						                                
						{day}
						                            
					</div>)}
					                        
                        
					{Array(getFirstDayOfMonth(currentDate)).fill('').map((_, i) => <div key={`empty-${i}`} style={{
						height: dayButtonHeight
					}} />)}
					                        
                        
					{Array(getDaysInMonth(currentDate)).fill('').map((_, index) => {
						const day = index + 1;
						const isSelected = selectedDate?.getDate() === day && selectedDate?.getMonth() === currentDate.getMonth() && selectedDate?.getFullYear() === currentDate.getFullYear();
						const isDisabled = new Date(currentDate.getFullYear(), currentDate.getMonth(), day) < new Date(new Date().setHours(0, 0, 0, 0));
						return <button
							key={day}
							onClick={() => !isDisabled && handleDateSelect(day)}
							style={{
								height: dayButtonHeight,
								border: "none",
								borderRadius: dayButtonRadius,
								backgroundColor: isSelected ? "rgb(59, 130, 246)" : "transparent",
								color: isSelected ? "white" : "inherit",
								opacity: isDisabled ? "0.5" : "1",
								cursor: isDisabled ? "not-allowed" : "pointer",
								transition: "background-color 150ms",
								fontSize: fontSize
							}}
							onMouseOver={e => {
								if (!isDisabled && !isSelected) {
									e.currentTarget.style.backgroundColor = "rgb(243, 244, 246)";
								}
							}}
							onMouseOut={e => {
								if (!isDisabled && !isSelected) {
									e.currentTarget.style.backgroundColor = "transparent";
								}
							}}
							disabled={isDisabled}
						>
							                                    
							{day}
							                                
						</button>;
					})}
					                    
				</div>
				                    
				{selectedDate && <div style={{
					marginTop: marginTop
				}}>
					                            
					<h3 style={{
						fontSize: timesFontSize,
						fontWeight: "600",
						marginBottom: "0.75rem",
						display: "flex",
						alignItems: "center",
						gap: timesGap
					}}>
						                                
						<span style={{
							width: "1rem",
							height: "1rem",
							display: "inline-block"
						}}>
							⏰
						</span>
						                                Available Times
                            
					</h3>
					                            
					<div style={{
						display: "grid",
						gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
						gap: timesGap
					}}>
						                                
						{timeSlots.map(time => <button
							key={time}
							onClick={() => setSelectedTime(time)}
							style={{
								padding: "0.5rem",
								border: "1px solid",
								borderColor: selectedTime === time ? "rgb(59, 130, 246)" : "rgb(229, 231, 235)",
								borderRadius: dayButtonRadius,
								backgroundColor: selectedTime === time ? "rgb(59, 130, 246)" : "white",
								color: selectedTime === time ? "white" : "rgb(55, 65, 81)",
								cursor: "pointer",
								fontSize: fontSize,
								transition: "all 150ms"
							}}
							onMouseOver={e => {
								if (!selectedTime === time) {
									e.currentTarget.style.backgroundColor = "rgb(243, 244, 246)";
								}
							}}
							onMouseOut={e => {
								if (!selectedTime === time) {
									e.currentTarget.style.backgroundColor = "white";
								}
							}}
						>
							                                        
							{time}
							                                    
						</button>)}
						                            
					</div>
					                        
				</div>}
				                    
				{selectedDate && selectedTime && <>
					                            
					<div style={{
						marginTop: marginTop,
						padding: summaryPadding,
						backgroundColor: "rgb(239, 246, 255)",
						borderRadius: borderRadius
					}}>
						                                
						<p style={{
							textAlign: "center",
							fontWeight: "500",
							fontSize: fontSize
						}}>
							                                    Selected: 
							{selectedDate.toLocaleDateString('default', {
								weekday: 'long',
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
							 at 
							{selectedTime}
							                                
						</p>
						                            
					</div>
					                            
					<button onClick={handleBooking} style={{
						width: "100%",
						marginTop: marginTop,
						padding: buttonPadding,
						backgroundColor: "rgb(59, 130, 246)",
						color: "white",
						border: "none",
						borderRadius: borderRadius,
						fontSize: fontSize,
						fontWeight: "600",
						cursor: "pointer",
						transition: "background-color 150ms"
					}} onMouseOver={e => e.currentTarget.style.backgroundColor = "rgb(37, 99, 235)"} onMouseOut={e => e.currentTarget.style.backgroundColor = "rgb(59, 130, 246)"}>
						                                Book Appointment
                            
					</button>
					                        
				</>}
				                
			</div>
			            
		</div>
		        
	</div>;
};

export default atomize(Bookingcalendar)({
	name: "Bookingcalendar",
	normalize: true,
	mixins: true,
	description: {
		en: "A calendar component for booking appointments with date and time selection"
	},
	propInfo: {
		containerWidth: {
			control: "input",
			description: "Width of the calendar container",
			defaultValue: "28rem"
		},
		borderRadius: {
			control: "input",
			description: "Border radius of the calendar",
			defaultValue: "0.75rem"
		},
		headerPadding: {
			control: "input",
			description: "Padding of the header section",
			defaultValue: "1.5rem"
		},
		contentPadding: {
			control: "input",
			description: "Padding of the content section",
			defaultValue: "1.5rem"
		},
		dayButtonHeight: {
			control: "input",
			description: "Height of day buttons",
			defaultValue: "2.5rem"
		},
		dayButtonRadius: {
			control: "input",
			description: "Border radius of buttons",
			defaultValue: "0.5rem"
		},
		fontSize: {
			control: "input",
			description: "Base font size",
			defaultValue: "0.875rem"
		},
		headerFontSize: {
			control: "input",
			description: "Header font size",
			defaultValue: "0.875rem"
		},
		timesFontSize: {
			control: "input",
			description: "Time section title font size",
			defaultValue: "1.125rem"
		},
		buttonSize: {
			control: "input",
			description: "Navigation button size",
			defaultValue: "2rem"
		},
		gridGap: {
			control: "input",
			description: "Gap between grid items",
			defaultValue: "0.25rem"
		},
		marginBottom: {
			control: "input",
			description: "Bottom margin for sections",
			defaultValue: "1rem"
		},
		marginTop: {
			control: "input",
			description: "Top margin for sections",
			defaultValue: "1.5rem"
		},
		timesGap: {
			control: "input",
			description: "Gap between time slots",
			defaultValue: "0.5rem"
		},
		summaryPadding: {
			control: "input",
			description: "Padding for the summary section",
			defaultValue: "1rem"
		},
		buttonPadding: {
			control: "input",
			description: "Padding for the booking button",
			defaultValue: "0.75rem"
		}
	}
});