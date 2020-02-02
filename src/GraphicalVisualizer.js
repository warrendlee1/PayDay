import React from "react";
import {Pie,} from 'react-chartjs-2';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const avgDebtExpense = 0;
const avgPersonalExpense = 0;
const avgEmergencyExpense = 0;

// function findAverageExpense(income) { 

// }

let CARDS = [
    {title: "Recommendation 1", subtitle: "Subtitle 1"},
    {title: "Recommendation 2", subtitle: "Subtitle 2"},
    {title: "Recommendation 3", subtitle: "Subtitle 3"},
];




const state = {
    labels: ["Debts/Bills","Personal","Emergency",],
    datasets: [
      {
        label: 'Expense Allocations',
        backgroundColor: [
          '#1862CC',
          '#477DCB',
          '#7AA5E3',
        ],
        hoverBackgroundColor: [
        '#5FEAC0',
        '#5FEAC0',
        '#5FEAC0',
        ],
        data: [30,50,20]
      }
    ]
  }

const useStyles = makeStyles({
    card: {
      maxWidth: 340,
    },
    media: {
      height: 120,
    },

});



export default function GraphicVisualizer() {
    let income = 1000;
    const classes = useStyles();
    let numSlides = CARDS.length;

    const createCards = (title, subtitle) => {
        return (
            <Slide index = {(numSlides)}>
                <Card className = {classes.card}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography>
                                {subtitle} 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href = "https://www.nerdwallet.com/">Nerd Wallet</Button>
                        <Button size="small" color="primary" href = "https://www.investopedia.com/">Investopedia</Button>
                    </CardActions>
                </Card>
            </Slide>
        )
    }

    return (
        <div className="GraphicVisualizer">
            <h1>PayDay</h1>
            <h2> ${income} monthly income </h2>
            <Pie
                data= {state}
                options={{
                    responsive:false,
                    maintainAspectRatio:false,
                    title:{
                        display:true,
                        text:'Expense Allocations',
                        fontSize:20
                    },
                    legend:{
                        display:true,
                        position:'right'
                    }
                }}
            />

            <CarouselProvider naturalSlideWidth={20} naturalSlideHeight={2} totalSlides={numSlides}>
                <Slider>
                    {
                        CARDS.map((cardData) => {
                            return createCards(cardData.title, cardData.subtitle)
                        })
                    }
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        </div>
    );
}
