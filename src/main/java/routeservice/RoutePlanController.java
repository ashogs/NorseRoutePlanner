package hello;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import routeutils.Routeplanner;
import java.util.concurrent.TimeUnit;


@RestController
public class RoutePlanController {

  private static final String template = "Hello, %s!";
  private static final String template2 = "22222222, %s!";
  private final AtomicLong counter = new AtomicLong();

  @CrossOrigin(origins = "*")
  @RequestMapping("/routefile_a2b")
  public RoutePlan routeplan(@RequestParam(value="name", defaultValue="World") String name) {
    return new RoutePlan(counter.incrementAndGet(),
              String.format(template, name));
  }

  @CrossOrigin(origins = "*")
  @RequestMapping("/route_a2b")
  public RoutePlan routeplan2(@RequestParam(value="name", defaultValue="World") String name) {
    return new RoutePlan(counter.incrementAndGet(),
              String.format(template2, name));
  }


  @CrossOrigin(origins = "*")
  @RequestMapping("/a2b")
  public String getFoos(@RequestParam List<String> routepoints) {
    String start = routepoints.get(0);
    String end =routepoints.get(1);

    Routeplanner my_routeplanner = new Routeplanner();
    Integer result = my_routeplanner.calculateDistanceFromStartingPoint(start, end);
    String routePath = my_routeplanner.findPath(start, end);



    String response = "Distansen fra "+ start + " til " + end + " er: " + result + " enheter, og du kommer til å reise via " + routePath + " . God tur!";




    return response;
  }





}
