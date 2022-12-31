
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { Button } from '../components/Ui/Button'
import { api } from "../contants";
import styles from '../components/func/message.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { addArticlesWithReply, addError, addLoading } from '../store/articles/actions'
export function ArticlesPage() {

    const articles = useSelector((store) => store.articles);
    const dispatch = useDispatch();
    // const [articles, setArticles] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState('');
    const getFetchArticles = async () => {
        dispatch(addLoading(true));
        dispatch(addError(''));
        try {
            const res = await fetch(api);
            if (res.ok) {
                const data = await res.json()
                dispatch(addArticlesWithReply(data))
            }
        } catch (error) {
            dispatch(addError(error.message))
        }
        finally {
            dispatch(addLoading(false))
        }
    }


    return (
        <>
            <div className={styles.wrapNews}>
                <h2>Informstion news articles</h2>
                <Button
                    variant="contained"
                    className={styles.button}
                    onClick={getFetchArticles} >
                    Get a news cards</Button>
                {articles.loading && (
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                )}
                {articles.loading === false && articles.articles.map((item) => (
                    <Card sx={{ maxWidth: 500 }} key={item.id}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={item.imageUrl}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.summary}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>)
                )
                }
                {articles.error && (<p style={{ color: 'darkred', border: '1px solid darkred', padding: '5px' }}>{articles.error}</p>)}
            </div>
        </>
    )
}