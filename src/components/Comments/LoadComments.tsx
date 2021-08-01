import { FC } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export const LoadComment: FC<{ path: string }> = ({ path }) => {
    const history = useHistory();

    return (
        <div className="text-center mx-auto">
            <Button
                size="lg"
                variant="warning"
                className="font-weight-semibold"
                onClick={() => history.push(path)}
            >
                Load Comments...
            </Button>
        </div>
    );
};
