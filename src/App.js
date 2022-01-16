import "./App.css";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function App() {
	return (
		<Container className="mContainer">
			<Paper>
				<Stack>
					<Card>
						<CardActionArea
							onClick={() => {
								window.location.href = "https://magic.alwin.gg";
							}}
						>
							<CardMedia component="img" image="/mtg.jpg" alt="catan" />
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									MagiCounter
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Tracking tool for EDH / Commander variant games of MTG.
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
					<Card>
						<CardActionArea
							onClick={() => {
								window.location.href = "https://catan.alwin.gg";
							}}
						>
							<CardMedia component="img" image="/catan.jpg" alt="magic" />
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Catan Dice App
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Dice app using the Card Stack method to create a more smooth and fair way of rolling
									dice.
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Stack>
			</Paper>
		</Container>
	);
}

export default App;
